import { useState } from 'react'

export default function App() {
    const [person, setPerson] = useState({
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345'
        },
        imageId: 2
    });

    const imageUrl = `https://i.pravatar.cc/150?img=${String(person.imageId).padStart(3, '0')}`;

    function handleNameChange(e) {
      setPerson({
        ...person,
        name: e.target.value
      });
    }

    function handleAgeChange(e) {
      setPerson({
        ...person,
        age: parseInt(e.target.value)
      });
    }

    function handleStreetChange(e) {
      setPerson({
        ...person,
        address: {
          ...person.address,
          street: e.target.value
        }
      });
    }

    function handleCityChange(e) {
      setPerson({
        ...person,
        address: {
          ...person.address,
          city: e.target.value
        }
      });
    }

    function handleStateChange(e) {
      setPerson({
        ...person,
        address: {
          ...person.address,
          state: e.target.value
        }
      });
    }

    function handleZipChange(e) {
      setPerson({
        ...person,
        address: {
          ...person.address,
          zip: e.target.value
        }
      });
    }

    function handleImageChange(e) {
      const value = Number(e.target.value) ;
      setPerson({
        ...person,
        imageId: value
      });
    }

    function handlePrevImage() {
      setPerson({
        ...person,
        imageId: person.imageId > 1 ? person.imageId - 1 : 1
      });
    }

    function handleNextImage() {
      setPerson({
        ...person,
        imageId: person.imageId + 1
      });
    }

    return (
      <div>
        <h1>Updating Objects in React</h1>

        <img src={imageUrl} alt="Profile" width={150} />
        <div>
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
        </div>

        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Address: {person.address.street}, {person.address.city}, {person.address.state} {person.address.zip}</p>
        <p>Profile Image URL: {imageUrl}</p>

        <label htmlFor="image">Avatar ID:</label>
        <input
          type="number"
          value={person.imageId}
          onChange={handleImageChange}
          placeholder="Avatar ID"
        />
        <br />
        <br />

        <h2>Update Person Information</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" value={person.name} onChange={handleNameChange} placeholder="Name" />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="text" value={person.age} onChange={handleAgeChange} placeholder="Age" />
        <br />
        <label htmlFor="street">Street:</label>
        <input type="text" value={person.address.street} onChange={handleStreetChange} placeholder="Street" />
        <br />
        <label htmlFor="city">City:</label>
        <input type="text" value={person.address.city} onChange={handleCityChange} placeholder="City" />
        <br />
        <label htmlFor="state">State:</label>
        <input type="text" value={person.address.state} onChange={handleStateChange} placeholder="State" />
        <br />
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" value={person.address.zip} onChange={handleZipChange} placeholder="Zip Code" />
      </div>
    );
}

