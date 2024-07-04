// import { useState } from "react";

// const Tag = () => {
//   const [tags, setTags] = useState("");
//   const removeTags = (indexToRemove) => {
//     const updatedTags = tags.filter((el, index) => index !== indexToRemove);
//     setTags(updatedTags);
//   };

//   const addTags = (event) => {
//     const inputValue = event.target.value;

//     if (
//       event.key === "Enter" &&
//       inputValue !== "" &&
//       !tags.includes(inputValue)
//     ) {
//       setTags([...tags, inputValue]);
//       event.target.value = "";
//     }
//   };

//   return (
//     <>
//       <label Htmlfor="input-tag" className="input-label">
//         태그
//       </label>
//       <input
//         className="input-tag"
//         name="tag"
//         value={values.tag}
//         onChange={handleInputChange}
//         placeholder="태그를 입력해주세요"
//         onKeyUp={(e) => {
//           {
//             addTags(e);
//           }
//         }}
//       />
//       <ul id="tags">
//         {tags.map((tag, index) => (
//           <li key={index} className="tag">
//             <span className="tag-title">{tag}</span>
//             <span className="tag-close-icon" onClick={() => removeTags(index)}>
//               x
//             </span>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Tag;
