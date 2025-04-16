import React, { useState } from "react";

function Footer() {
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <footer className="align-bottom mt-4 bg-transparent text-white text-xs text-center">
      <p>© {date} Gabriel Lujan Bonassi.</p>
      <p>Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
