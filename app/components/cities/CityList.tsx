import React, { useState } from "react";
import { Button, ButtonGroup, Table, Modal } from "react-bootstrap";
import { CityDto } from "../../../dto/city.dto";
import { createUrl } from "../../../utils/url";

type IProps = {
  cities: CityDto[];
  setCityDto: (c: CityDto) => void;
  loadCities: () => void;
};

export function CityList(props: IProps) {
  const { cities, setCityDto, loadCities } = props;

  const [showModal, setShowModal] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<CityDto | null>(null);

  const handleFillForm = (city: CityDto) => {
    setCityDto(city);
  };

  const handleDelete = () => {
    
      fetch(createUrl(`api/cities/${cityToDelete._id}`), {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cityToDelete),
      })
        .then((res) => {loadCities()})

    setShowModal(false)
  };

  return (
    <>
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Miestas</th>
            <th>Gyventoju skaicius</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, key) => (
            <tr key={key}>
              <td>{city.name}</td>
              <td>{city.population}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary" onClick={() => handleFillForm(city)}>
                    Keisti
                  </Button>
                  <Button variant="danger" onClick={() => {setCityToDelete(city);setShowModal(true);}}>
                    Šalinti
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Patviritinti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ar tikrai norite pašalinti šį miestą:{" "}
          {cityToDelete?.name || ""}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Atšaukti
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Šalinti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}