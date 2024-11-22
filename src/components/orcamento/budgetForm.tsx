"use client";

import { getAllPanels } from "@/services/api";
import { PanelProps } from "@/types/panel";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BudgetForm = () => {
  const { data: session } = useSession();

  const [panels, setPanels] = useState<PanelProps[]>([]);
  const [selectedPanel, setSelectedPanel] = useState<PanelProps | null>(null);
  const [monthlyValue, setMonthlyValue] = useState<number | null>(null);
  const [discount, setDiscount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPanels = async () => {
      const fetchedPanels = await getAllPanels();

      setPanels(fetchedPanels);
    };

    fetchPanels();
  }, []);

  const handlePanelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const panelId = event.target.value;
    const panel = panels.find((p) => p.id === parseInt(panelId, 10)) || null; // Busca o painel correspondente
    setSelectedPanel(panel);
  };

  const handleMonthlyValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    setMonthlyValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!session) {
      return
    }

    if (!selectedPanel || !monthlyValue) {
      toast.error("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    if (monthlyValue <= 0) {
      toast.error("Valor inválido!");
      return;
    }

    const discount = (monthlyValue * selectedPanel.percentualDeEconomia) / 100;

    setMonthlyValue(null);
    setSelectedPanel(null);
    setDiscount(discount);

    toast.success("Orçamento realizado!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 w-full md:w-1/2 p-4"
    >
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="value" className="font-medium">
          Valor da sua conta mensal
        </label>
        <input
          id="value"
          type="number"
          placeholder="R$"
          className="bg-slate-300 mb-4 outline-none px-2 py-1 rounded-md"
          required
          value={monthlyValue !== null ? monthlyValue.toString() : ""}
          onChange={handleMonthlyValueChange}
          disabled={!session}
        ></input>
        <label htmlFor="panel" className="font-medium">
          Selecione um modelo
        </label>
        <select
          id="panel"
          className="bg-slate-300 mb-4 outline-none px-2 py-1 rounded-md"
          required
          value={selectedPanel ? selectedPanel.id.toString() : ""}
          onChange={handlePanelChange}
          disabled={!session}
        >
          <option value="">Selecione uma opção</option>
          {panels ? (
            panels.map((panel) => (
              <option key={panel.id} value={panel.id}>
                {panel.nome}
              </option>
            ))
          ) : (
            <option>Carregando...</option>
          )}
        </select>
        {session ? (
          <button
            type="submit"
            className="bg-orange-500 font-medium text-white rounded-md py-1 mt-2 hover:bg-orange-600 duration-200"
          >
            Calcular economia
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-orange-500 font-medium text-white rounded-md py-1 hover:bg-orange-600 duration-200"
          >
            Faça login para calcular
          </button>
        )}
      </div>
      <div>
        <p className="font-semibold text-xl">
          Valor economizado: R${" "}
          {discount !== null ? discount.toFixed(2).replace(".", ",") : 0}
        </p>
      </div>
    </form>
  );
};

export default BudgetForm;
