// paso 3

import FormWrapper from "./FormWeapper";

type LocationData = {
  selectionType: string;
  region: string;
  comuna: string;
  concesionario: string;
  sucursal: string;
  date: string;
};



type LocationFormProps = {
  updateFields: (fields: Partial<LocationData>) => void;
  onSearchAvailability: () => void;
} & LocationData;

export function LocationForm({
  selectionType,
  region,
  comuna,
  concesionario,
  sucursal,
  date,
  updateFields,
  onSearchAvailability
}: LocationFormProps) {
  const regions: { [key: string]: string[] } = {
    "Región Metropolitana de Santiago": ["CERRILLOS", "COLINA", "HUECHURABA"],
    "Región de Antofagasta": ["ANTOFAGASTA"],
    "Región de Atacama": ["COPIAPO"],
  };

  const concesionarios: { [key: string]: string[] } = {
    "Andes Motor": ["Andes Motor Cantagallo", "Andes Motor Antofagasta"],
    "Automotora Magallanes": ["Automotora Magallanes"],
  };

  

  const handleSelectionTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ selectionType: e.target.value });
  };

  return (
    <FormWrapper title="Paso 3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="selectionType"
              value="COMUNA"
              className="form-radio text-indigo-600"
              checked={selectionType === 'COMUNA'}
              onChange={handleSelectionTypeChange}
            />
            <span className="ml-2">Comuna</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="selectionType"
              value="CONCESIONARIO"
              className="form-radio text-indigo-600"
              checked={selectionType === 'CONCESIONARIO'}
              onChange={handleSelectionTypeChange}
            />
            <span className="ml-2">Concesionario</span>
          </label>
        </div>

        <label className="block">
          Región
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={region}
            onChange={(e) => updateFields({ region: e.target.value, comuna: '' })}
          >
            <option value="">Seleccione una región</option>
            {Object.keys(regions).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Comuna
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={comuna}
            onChange={(e) => updateFields({ comuna: e.target.value })}
            disabled={!region}
          >
            <option value="">Seleccione una comuna</option>
            {region && regions[region].map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Concesionario
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={concesionario}
            onChange={(e) => updateFields({ concesionario: e.target.value, sucursal: '' })}
          >
            <option value="">Seleccione un concesionario</option>
            {Object.keys(concesionarios).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Sucursal
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={sucursal}
            onChange={(e) => updateFields({ sucursal: e.target.value })}
            disabled={!concesionario}
          >
            <option value="">Seleccione una sucursal</option>
            {concesionario && concesionarios[concesionario].map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Fecha
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={date}
            onChange={(e) => updateFields({ date: e.target.value })}
          />
        </label>

        <button
            className="text-sm font-semibold leading-6 text-black border border-black px-10 rounded-xl"
            onClick={onSearchAvailability}
        >
          Buscar Disponibilidad
        </button>
      </div>
    </FormWrapper>
  );
}
