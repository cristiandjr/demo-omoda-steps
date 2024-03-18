// step 2

import FormWrapper from "./FormWeapper";

type ServiceData = {
  serviceType: string;
  observations: string;
  additionalInfo: string;
};

type ServiceFormProps = {
  updateFields: (fields: Partial<ServiceData>) => void;
} & ServiceData;

export function ServiceForm({
  serviceType,
  observations,
  additionalInfo,
  updateFields
}: ServiceFormProps) {
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ serviceType: e.target.value });
    // Limpiar campos adicionales al cambiar el tipo de servicio
    updateFields({ additionalInfo: '', observations: '' });
  };

  return (
    <FormWrapper title="Paso 2">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="serviceType"
              value="Mantencion"
              className="form-radio h-5 w-5"
              checked={serviceType === 'Mantencion'}
              onChange={handleServiceChange}
            />
            Mantención
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="serviceType"
              value="Recall"
              className="form-radio h-5 w-5"
              checked={serviceType === 'Recall'}
              onChange={handleServiceChange}
            />
            Recall
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="serviceType"
              value="Otro servicio"
              className="form-radio h-5 w-5"
              checked={serviceType === 'Otro servicio'}
              onChange={handleServiceChange}
            />
            Otro servicio
          </label>
        </div>

        {serviceType === 'Mantencion' && (
          <div className="flex flex-col gap-2">
            <label className="block">
              Kilometraje
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={additionalInfo}
                onChange={(e) => updateFields({ additionalInfo: e.target.value })}
              >
                {Array.from({ length: 40 }, (_, index) => (5000 * (index + 1)))
                  .map(km => (
                    <option key={km} value={km}>{`${km}km`}</option>
                  ))}
              </select>
            </label>
          </div>
        )}

        {serviceType === 'Otro servicio' && (
          <div className="flex flex-col gap-2">
            <label className="block">
              Servicio
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={additionalInfo}
                onChange={(e) => updateFields({ additionalInfo: e.target.value })}
              >
                <option value="Cambio de pastilla de frenos">Cambio de pastilla de frenos</option>
                <option value="Inspeccion sistema de frenos">Inspección sistema de frenos</option>
                <option value="Sin mantencion">Sin mantención</option>
                <option value="Mecanica general">Mecánica general</option>
              </select>
            </label>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="block">
            Observaciones
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Observaciones"
              value={observations}
              onChange={(e) => updateFields({ observations: e.target.value })}
            />
          </label>
        </div>
      </div>
    </FormWrapper>
  );
}
