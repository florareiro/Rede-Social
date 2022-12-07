import React, { useEffect, useState } from "react";
import { sendIcon } from "../../assets";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../features/postSlice";
import useFetch from "../../hooks/useFetch";
import "./createpost.css";

const initialForm = { caption: "" };

const CreatePost = ({ post, id, close }) => {
  // local states
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (post && post._id) {
      setForm({ caption: post.caption });
    }
  }, [post]);

  const dispatch = useDispatch();
  const customFetch = useFetch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("caption", form.caption.trim());
    if (post?._id) {
      dispatch(updatePost({ customFetch, id: post._id, formData }));
      close();
    } else {
      dispatch(addPost({ customFetch, formData }));
    }
    setForm(initialForm);
  };

  return (
    <article className="createpost gradient-border">
      <form onSubmit={submitHandler}>
        <textarea
          placeholder="Compartilhe um pensamento..."
          value={form.caption}
          onChange={(e) => setForm({ ...form, caption: e.target.value })}
        />
        <div className="btns">
          <button type="submit" aria-label="enviar">
            <img src={sendIcon} alt="send" />
          </button>
        </div>
      </form>
    </article>
  );
};

export default CreatePost;
