"use client";

import React, { useContext, useMemo, useId, forwardRef } from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "../lib/utils";

const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

const ChartContainer = forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([_, cfg]) => cfg.theme || cfg.color);

  if (!colorConfig.length) return null;

  return (
    <style
      role="presentation"
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`)}
      }
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = forwardRef(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) return null;
      const [item] = payload;
      const key = labelKey || item.dataKey || item.name || "value";
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      return value ? <div className={cn("font-medium", labelClassName)}>{value}</div> : null;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {tooltipLabel}
        <div className="grid gap-1.5">
          {payload.map((item) => {
            const key = nameKey || item.name || item.dataKey || "value";
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload?.fill || item.color;

            return (
              <div key={key} className="flex items-center gap-2">
                {!hideIndicator && (
                  <div
                    className="h-2 w-2 shrink-0 rounded-[2px]"
                    style={{ backgroundColor: indicatorColor }}
                  />
                )}
                <div className="flex flex-1 justify-between">
                  <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                  {item.value && (
                    <span className="font-mono font-medium tabular-nums text-foreground">
                      {formatter ? formatter(item.value) : item.value.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload.map((item) => {
        const key = nameKey || item.dataKey || "value";
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div key={key} className="flex items-center gap-1.5">
            {!hideIcon && (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

function getPayloadConfigFromPayload(config, payload, key) {
  if (!config || typeof payload !== "object" || !payload) return undefined;

  const payloadData = payload?.payload || {};
  let configKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configKey = payload[key];
  } else if (key in payloadData && typeof payloadData[key] === "string") {
    configKey = payloadData[key];
  }

  return config[configKey] || config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
