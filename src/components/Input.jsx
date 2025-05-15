import React from "react";

export default function Input({
  tipo,
  titulo,
  placeholder = titulo,
  name,
  value,
  onChange
}) {
  const PLACEHOLDERS = ["text", "password", "mail"];
  const TIENE_PLACEHOLDER = PLACEHOLDERS.includes(tipo);
  return (
    <>
      <label>{titulo}</label>
      {tipo !== "textarea" ? (
        <input
          type={tipo}
          placeholder={TIENE_PLACEHOLDER ? placeholder : undefined}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          cols="30"
          rows="1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
}
