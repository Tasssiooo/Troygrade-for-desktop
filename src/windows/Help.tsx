import screenshot1 from "@/assets/images/screenshots/screenshot-1.png";
import screenshot2 from "@/assets/images/screenshots/screenshot-2.png";
import screenshot3 from "@/assets/images/screenshots/screenshot-3.png";
import screenshot4 from "@/assets/images/screenshots/screenshot-4.png";
import screenshot5 from "@/assets/images/screenshots/screenshot-5.png";
import screenshot6 from "@/assets/images/screenshots/screenshot-6.png";
import screenshot7 from "@/assets/images/screenshots/screenshot-7.png";
import screenshot8 from "@/assets/images/screenshots/screenshot-8.png";

import "./help.css";

export default function Help() {
  return (
    <main className="py-4 overflow-auto h-screen bg-gradient-to-t from-[#082836] to-[#041c27]">
      <header className="p-4 text-xl text-[#e2b151]">
        <h1>TROYGRADE: How to use</h1>
      </header>
      <div className="px-4">
        <section className="Step">
          <h2>
            <span className="step-number">1.</span> Click on the plus button to
            add files.
          </h2>
          <figure>
            <img src={screenshot1} alt="Plus button" />
          </figure>
        </section>
        <section className="Step">
          <h2>
            <span className="step-number">2.</span> After the dialog open,
            select the files you want to convert.
          </h2>
          <figure>
            <img src={screenshot2} alt="Dialog opened" />
          </figure>
          <h3 className="mx-5 my-2">
            <span className="step-number">2.1.</span> The files will be
            organized like this
          </h3>
          <figure className="sub">
            <img src={screenshot3} alt="File list" />
          </figure>
        </section>
        <section className="Step">
          <h2>
            <span className="step-number">3.</span> You can select one or more
            files to edit.
          </h2>
          <figure className="mb-4">
            <figcaption>- Selecting one file</figcaption>
            <img
              src={screenshot4}
              width={720}
              height={520}
              alt="One file selected"
            />
          </figure>
          <figure>
            <figcaption>- Selecting multiple files</figcaption>
            <img
              src={screenshot5}
              width={720}
              height={520}
              alt="Multiple files selected"
            />
          </figure>
        </section>
        <section className="Step">
          <h2>
            <span className="step-number">4.</span> There are some handlers you
            can use, each one has a specific way to handle the files, above them
            there is an editable area where you can make modifications on the
            code.
          </h2>
          <figure>
            <figcaption>
              <p>From right to left:</p>
              <ul>
                <li>Open the code in a new tab.</li>
                <li>Save the edits you made in the code editor.</li>
                <li>Open the conversion dialog.</li>
                <li>
                  Write the code in a .txt file and save in a selected
                  directory.
                </li>
                <li>Delete files from the list.</li>
              </ul>
            </figcaption>
            <img
              src={screenshot6}
              width={390}
              height={150}
              alt="File handlers"
            />
          </figure>
        </section>
        <section className="Step">
          <h2>
            <span className="step-number">5.</span> After clicking on the
            convert button, this dialog will appear.
          </h2>
          <figure>
            <figcaption>
              <p>
                You can either use the default settings or make a custom setting
                yourself clicking on "Continue".
              </p>
            </figcaption>
            <img
              src={screenshot7}
              width={600}
              height={300}
              alt="Conversion dialog"
            />
          </figure>
        </section>
        <section className="Step">
          <h2>
            <span className="step-number">6.</span> After proceeding with
            "Continue", this modal will appear, here you have to set paths for
            assets and file, there are also some options that you can use by
            filling in the checkboxes.
          </h2>
          <figure>
            <img
              src={screenshot8}
              width={720}
              height={520}
              alt="Conversion dialog"
            />
          </figure>
        </section>
      </div>
    </main>
  );
}
