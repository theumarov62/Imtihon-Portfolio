import { useState } from "react";

function AdminAbout() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  
  return (
    <section className="p-10">
      <div className="min-h-screen flex items-center justify-center max-w-[1200px] ml-auto mr-auto w-[100%]">
        <form>
          <div className="flex flex-col gap-4  items-center justify-center">
            <input
              type="text"
              placeholder="About nomini kiriting"
              className="input"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="input"
              placeholder="About ro'lini kiriting"
              onChange={(e) => setRole(e.target.value)}
            />

            <textarea
              className="input resize-none w-[400px] h-[100px] p-2"
              placeholder="About biosini kiriting"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>

            <button type="Submit">About qo'shish</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminAbout;
