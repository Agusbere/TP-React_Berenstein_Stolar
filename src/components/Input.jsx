import React from "react";
import "../styles/input.css";

export default function Input({ tipo, titulo, placeholder = titulo}) {
  const PLACEHOLDERS = ["text", "password", "mail"];
  const TIENE_PLACEHOLDER = PLACEHOLDERS.includes(tipo);
  return (
    <>
      <label>{titulo}</label>
      {tipo !== "textarea" ? (
        <input
          type={tipo}
          placeholder={TIENE_PLACEHOLDER ? placeholder : undefined}
        />
      ) : (
        <textarea cols="30" rows="1" placeholder={placeholder} />
      )}
    </>
  );
}
