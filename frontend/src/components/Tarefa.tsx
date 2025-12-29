import { Trash2, Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

export interface tarefasInterface {
  id: string;
  titulo: string;
  intervalo: "Todos os dias" | "Uma vez";
  horario: string;
  finalizada: boolean;
}

interface TarefaProps {
  tarefa: tarefasInterface;
}

const Tarefa = ({ tarefa }: TarefaProps) => {
  const finalizada = tarefa.finalizada;
  const [tarefaFinalizada, setTarefaFinalizada] = useState(tarefa.finalizada);

  return (
    <div
      className={`rounded-xl p-4 text-sm mx-4 sm:mx-0 shadow-md transition-all duration-300 bg-white`}
    >
      <p className={`text-center font-semibold mb-3 text-gray-800`}>
        {tarefa.titulo}
      </p>

      <div className="h-px bg-gray-200 mb-3"></div>

      <div className="flex justify-between items-center gap-4">
        <div className="space-y-1">
          <p className="text-gray-600">{tarefa.intervalo}</p>
          <p className="text-gray-500 text-xs">{tarefa.horario}</p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="p-1 rounded-full hover:bg-red-100 transition "
            title="Remover tarefa"
          >
            <Trash2 size={18} className="text-red-500 cursor-pointer" />
          </button>

          <button
            className={`p-1 rounded-full transition
              ${
                finalizada
                  ? "bg-green-100 cursor-pointer"
                  : "hover:bg-gray-100 cursor-pointer"
              }
            `}
            title={
              tarefaFinalizada ? "Tarefa concluída" : "Marcar como concluída"
            }
          >
            {tarefa.intervalo === "Uma vez" &&
              (tarefaFinalizada ? (
                <CircleCheck
                  size={18}
                  className="text-green-600"
                  onClick={() => setTarefaFinalizada(!tarefaFinalizada)}
                />
              ) : (
                <Circle
                  size={18}
                  className="text-gray-400 hover:text-green-500 cursor-pointer"
                  onClick={() => setTarefaFinalizada(!tarefaFinalizada)}
                />
              ))}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarefa;
