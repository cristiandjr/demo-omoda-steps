// STEP 1

import FormWrapper from "./FormWeapper";

// Definición de tipos
type UserData = {
  tipo: string;
  modelo: string;
  anio: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

// Definición de estructuras con tipos específicos
type ModelosPorTipo = {
  [key: string]: string[];
};

type RangoAnios = {
  inicio: number;
  fin: number;
};

type AniosPorTipoYModelo = {
  [tipo: string]: {
    [modelo: string]: RangoAnios;
  };
};

const modelosPorTipo: ModelosPorTipo = {
  electricos: ["MG MARVEL R DLX", "MG ZS EV", "NEW MG ZS EV"],
  pasajeros: ["MG 360 1.5 AT", "MG 360 1.5 MT"],
  suv: ["MG HS 1.5T DCT DLX", "MG HS 1.5T MT COM"]
};

const aniosPorTipoYModelo: AniosPorTipoYModelo = {
  electricos: {
    "MG MARVEL R DLX": { inicio: 2023, fin: 2024 },
    "MG ZS EV": { inicio: 2020, fin: 2025 },
    "NEW MG ZS EV": { inicio: 2022, fin: 2024 },
  },
  pasajeros: {
    "MG 360 1.5 AT": { inicio: 2017, fin: 2018 },
  },
  suv: {
    "MG HS 1.5T DCT DLX": { inicio: 2020, fin: 2024 },
    "MG HS 1.5T MT COM": { inicio: 2020, fin: 2024 }
  },
};

export function UserForm({
  tipo,
  modelo,
  anio,
  updateFields
}: UserFormProps) {
  // Considerando un rango de años más amplio por defecto
  const getAnios = (): number[] => {
    let anios = [];
    const rango = aniosPorTipoYModelo[tipo]?.[modelo];
    if (rango) {
      for (let year = rango.inicio; year <= rango.fin; year++) {
        anios.push(year);
      }
    } else {
      // Rango por defecto si no hay selección o no se encuentra el rango específico
      for (let year = 1990; year <= new Date().getFullYear() + 1; year++) {
        anios.push(year);
      }
    }
    return anios;
  };
  

  return (
    <FormWrapper title="Paso 1">
      {/* Select para Tipo */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tipo
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoFocus
          value={tipo}
          onChange={(e) => updateFields({ tipo: e.target.value, modelo: '', anio: '' })}
        >
          <option value="">Seleccione un tipo</option>
          <option value="electricos">Eléctricos</option>
          <option value="pasajeros">Pasajeros</option>
          <option value="suv">SUV</option>
        </select>
      </div>

      {/* Select para Modelo, siempre visible */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Modelo
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          value={modelo}
          onChange={(e) => updateFields({ modelo: e.target.value, anio: '' })}
        >
          <option value="">Seleccione un modelo</option>
          {tipo ? modelosPorTipo[tipo]?.map((modelo) => (
            <option key={modelo} value={modelo}>
              {modelo}
            </option>
          )) : ([] as string[]).concat(...Object.values(modelosPorTipo).flat()).map((modelo, index) => (
            <option key={index} value={modelo}>
              {modelo}
            </option>
          ))}
        </select>
      </div>

      {/* Select para Año, siempre visible */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Año
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          value={anio}
          onChange={(e) => updateFields({ anio: e.target.value })}
        >
          <option value="">Seleccione un año</option>
          {getAnios().map((anio) => (
            <option key={anio} value={String(anio)}>
              {anio}
            </option>
          ))}
        </select>
      </div>
    </FormWrapper>
  );
}
