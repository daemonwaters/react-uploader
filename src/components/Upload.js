import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import { storage, getDownloadURL, ref, uploadBytesResumable } from "../config";
import Success from "./Success";
import Failed from "./Failed";

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      visibility: hidden;
      margin: 1rem 0;
    }

    svg {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      cursor: pointer;
      &:hover {
        color: lightblue;
      }
    }
  }

  h3 {
    text-transform: capitalize;
  }
`;

function Upload({ setUrls,urls}) {
  const [progress, setProgress] = useState(0);
  const [succes, setSucces] = useState(undefined);
  const validTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && validTypes.includes(selectedFile.type)) {
      const storageRef = ref(storage, `files/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog);
        },
        (err) => {
          console.log(err);
          setSucces(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setProgress(0);
            setUrls([...urls, url]);
            setSucces(true);
          });
        }
      );
    } else {
      alert("please upload only valid image types");
      return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSucces(undefined);
    }, 5000);
  }, [urls]);

  return (
    <UploadWrapper>
      <label htmlFor="input">
        <input
          onChange={handleChange}
          type="file"
          name="files-uploader"
          id="input"
        />
        <FaPlusCircle />
      </label>
      <h3>press to add files</h3>
      <ProgressBar percent={progress} />
      {succes ? <Success /> : succes === false ? <Failed /> : undefined}
    </UploadWrapper>
  );
}

export default Upload;
