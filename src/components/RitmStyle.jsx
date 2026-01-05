import "./index.css";

const RitmStyle = () => {
  return (
    <section className="ritm">
      <h2 className="ritm-title">Об RitmStyle</h2>

      <div className="ritm-block">
        <div className="ritm-text">
          <h3>RitmStyle массаж</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quod
            repellendus distinctio minima blanditiis aspernatur molestiae ipsam
            nostrum velit debitis.
          </p>
        </div>

        <img src="/ritmstyle.png" alt="massage" className="ritm-img" />
      </div>

      <div className="ritm-block-reverse">
        <img src="/ritmstyle.png" alt="water" className="ritm-img" />

        <div className="ritm-text">
          <h3>RitmStyle гидротерапия</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            unde, tenetur fugit possimus quibusdam harum nobis dolor quod fugiat
            est!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RitmStyle;
