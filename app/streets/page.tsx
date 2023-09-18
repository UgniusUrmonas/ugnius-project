"use client"
import React, { useState, useEffect } from "react";
import { createUrl } from "../../utils/url";
import { StreetDto } from "../../dto/street.dto";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Street() {
  const [street, setStreet] = useState<StreetDto[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const loadStreet = () => {
    fetch(createUrl("api/streets"), {
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((c) => setStreet(c));
  };

  useEffect(() => {
    loadStreet();
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Dropdown>
      <div>
        <p>Pasirinkti gatvę:</p>

        <select value={selectedOption} onChange={handleOptionChange}>
          {street.map((street) => (
            <option key={street._id} value={street.name}>
              {street.name}
            </option>
          ))}
        </select>

        <p>Pasirinkta gatvė: {selectedOption}</p>
      </div>
    </Dropdown>
  );
}