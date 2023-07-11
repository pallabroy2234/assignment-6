import {useState} from "react";

const Content = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(text);
    setText("");
  };

  const trunckateText = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className='container'>
      <div className='h-[90vh]'>
        <div className='flex h-[50vh] flex-col items-center justify-center'>
          <form onSubmit={handleSubmit}>
            <textarea className='mt-12  h-[200px] w-[550px] resize-none rounded-md border border-black p-3 outline-none  focus:border-black' name='' id='' placeholder='Something Write Here' value={text} onChange={handleChange}></textarea>

            <button className='mt-4 block rounded-sm border border-black px-8 py-2 transition-all  duration-300 hover:bg-black hover:text-white' type='submit'>
              Submit
            </button>
          </form>
          <div className='mt-3'>
            <p>{trunckateText(value, 500)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
