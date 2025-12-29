import { useEffect, useState } from "react";
import Tarefa, { type tarefasInterface } from "../components/Tarefa";

const categorias = ["Tarefas Pendentes", "Tarefas Finalizadas"];

export const listaDeTarefas: tarefasInterface[] = [
  {
    id: "1",
    titulo: "Tomar banho",
    intervalo: "Todos os dias",
    horario: "14:30 às 14:45",
    finalizada: false,
  },
  {
    id: "2",
    titulo: "Estudar React",
    intervalo: "Uma vez",
    horario: "16:00 às 18:00",
    finalizada: true,
  },
  {
    id: "3",
    titulo: "Estudar JavaScript",
    intervalo: "Uma vez",
    horario: "15:00 às 16:00",
    finalizada: false,
  },
  {
    id: "4",
    titulo: "Ir à academia",
    intervalo: "Todos os dias",
    horario: "19:00 às 20:00",
    finalizada: false,
  },
];

const Home = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Tarefas Pendentes");
  const [lista, setLista] = useState<tarefasInterface[]>([]);

  useEffect(() => {
    const newList = listaDeTarefas.filter(
      (x) => x.finalizada === (categoriaSelecionada === "Tarefas Finalizadas")
    );
    setLista(newList);
  }, [categoriaSelecionada]);

  return (
    <>
      <div className=" text-white max-w-4xl w-full h-[calc(100vh-75px)] mx-auto">
        <div className="flex mt-1 flex-col">
          <div className="flex gap-2 items-center justify-center text-sm">
            {categorias.map((c) => (
              <h1
                className={`mt-4 cursor-pointer ${
                  c === categoriaSelecionada
                    ? "bg-red-500 p-1 rounded-sm font-bold"
                    : "bg-none"
                }`}
                onClick={() => setCategoriaSelecionada(c)}
              >
                {c}
              </h1>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {lista.map((tarefa) => (
              <Tarefa key={tarefa.id} tarefa={tarefa} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
