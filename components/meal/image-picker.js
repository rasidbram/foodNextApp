"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  // useRef used to access the input element
  const imageInput = useRef();

  const handlePickImage = () => {
    // Click the input element to open the file picker
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    // Create a new FileReader instance
    const reader = new FileReader();
    // Set the picked image to the result of the FileReader
    reader.onload = () => {
      // The result property contains the file's data URL
      setPickedImage(reader.result);
    };
    // Read the file as a data URL
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickImage}>
          Pick Image
        </button>
      </div>
    </div>
  );
}
