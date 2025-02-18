"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./TestimonialSection";
import { AiOutlineMessage, AiOutlineCamera, AiOutlineCheckCircle } from 'react-icons/ai'; // Import icons

function AnimatedModalDemo() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [review, setReview] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  useEffect(() => {
    if (isPhotoUploaded) {
      setIsMessageVisible(true);
      const timer = setTimeout(() => setIsMessageVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isPhotoUploaded]);

  const handleSubmit = () => {
    setName("");
    setDestination("");
    setReview("");
    setProfilePhoto(null);
    setIsPhotoUploaded(false);
    setIsReviewSubmitted(true);
    setIsModalOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      setIsPhotoUploaded(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-10 flex items-center justify-center relative">
      {/* Modal Trigger Button */}
      <Modal isOpen={isModalOpen}>
        <ModalTrigger
          className="bg-black px-9 py-3 dark:bg-[#2C1A47] dark:text-white text-white flex justify-center group/modal-btn mt-[-10px] ml-[-90px]"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Feedback
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <AiOutlineMessage className="text-white text-3xl" />
          </div>
        </ModalTrigger>

        {/* Modal Body */}
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Give your feedback and make a difference!
            </h4>

            {/* Name Input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-white text-md text-gray-700 dark:bg-neutral-800 dark:text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Destination Input */}
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
              className="w-full bg-white text-md text-gray-700 dark:bg-neutral-800 dark:text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Review Text Area */}
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Type your review here..."
              rows={5}
              className="w-full bg-white text-md text-gray-700 dark:bg-neutral-800 dark:text-white rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ resize: 'none' }}
            />

            {/* File Upload Section */}
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              Want to upload a profile photo? (optional)
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="profile-photo"
            />
            <label
              htmlFor="profile-photo"
              className="bg-purple-500 text-white text-center py-2 px-4 rounded-lg cursor-pointer w-full mb-4 flex items-center justify-center"
            >
              <AiOutlineCamera className="mr-2 text-white" />
              Upload Photo
            </label>

            {/* Success Message after Uploading Photo */}
            {isMessageVisible && (
              <div className="flex justify-center mb-4 text-center text-purple-500 font-semibold transition-opacity duration-500">
                <AiOutlineCheckCircle className="text-2xl mr-2" />
                <span>Thanks for uploading your photo!</span>
              </div>
            )}

            {/* Success Message after Submitting Review */}
            {isReviewSubmitted && (
              <div className="flex justify-center mb-4 text-center text-purple-500 font-semibold transition-opacity duration-500">
                <AiOutlineCheckCircle className="text-2xl mr-2" />
                <span>Review submitted, you can close now!</span>
              </div>
            )}
          </ModalContent>

          {/* Modal Footer */}
          <ModalFooter className="gap-4">
            <button
              className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
              onClick={handleModalClose}
            >
              Cancel
            </button>
            <button
              className="bg-purple-500 text-white dark:bg-purple-700 dark:text-white text-sm px-2 py-1 rounded-md border border-purple-500 w-28"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AnimatedModalDemo;
