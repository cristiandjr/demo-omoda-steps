import { FormEvent, useState } from "react";
import { LocationForm } from "./AccountForm";
import { ServiceForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepFrom } from "./useMultistepFrom";

type FormData = {
  // step 1
  tipo: string;
  modelo: string;
  anio: string;

  // step 2
  serviceType: string;
  observations: string;
  additionalInfo: string;

  // step 3
  selectionType: string;
  region: string;
  comuna: string;
  concesionario: string;
  sucursal: string;
  date: string;
};

const INITIAL_DATA: FormData = {
  // step 1
  tipo: "",
  modelo: "",
  anio: "",

  // step 2
  serviceType: "",
  observations: "",
  additionalInfo: "",

  // step 3
  selectionType: "",
  region: "",
  comuna: "",
  concesionario: "",
  sucursal: "",
  date: "",
};

function App() {
  // state
  const [data, setData] = useState(INITIAL_DATA);

  //
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Suponiendo que `onSearchAvailability` sea específica para LocationForm,
  // aquí se define la función.
  function onSearchAvailability() {
    // Implementación de la función...
    console.log("Buscando disponibilidad...");
  }


  //
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepFrom([
      <UserForm {...data} updateFields={updateFields} />,
      <ServiceForm {...data} updateFields={updateFields} />,
      <LocationForm {...data} updateFields={updateFields} onSearchAvailability={onSearchAvailability} />,
    ]);

  //
  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    alert("se agendo el turno...");
    console.log(data);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={onSubmit}>
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span className="absolute mt-20 ml-5 px-3 py-1 rounded-full text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {currentStepIndex + 1} / {steps.length}
          </span>
        </div>

        {step}

        <div
          style={{
            marginTop: "0rem",
            marginLeft: "1rem",
            display: "flex",
            gap: "5rem",
            justifyContent: "flex-start",
            marginBottom: "1rem",
          }}
        >
          {!isFirstStep && (
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-black border border-black px-10 rounded-xl"
              onClick={back}
            >
              Volver atrás
            </button>
          )}
          <button
            type="submit"
            className="text-sm font-semibold leading-6 text-black border border-black px-10 rounded-xl"
          >
            {isLastStep ? "Finalizar" : "Siguiente"}
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default App;
