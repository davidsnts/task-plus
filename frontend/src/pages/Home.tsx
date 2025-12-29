import Tarefa, { type tarefasInterface } from "../components/Tarefa";

export const listaDeTarefas: tarefasInterface[] = [
  {
    titulo: "Tomar banho",
    intervalo: "Todos os dias",
    horario: "14:30 às 14:45",
    finalizada: false,
  },
  {
    titulo: "Estudar React",
    intervalo: "Uma vez",
    horario: "16:00 às 18:00",
    finalizada: true,
  },
  {
    titulo: "Estudar JavaScript",
    intervalo: "Uma vez",
    horario: "15:00 às 16:00",
    finalizada: false,
  },
  {
    titulo: "Ir à academia",
    intervalo: "Todos os dias",
    horario: "19:00 às 20:00",
    finalizada: false,
  },
];

const Home = () => {
  return (
    <>
      <div className=" text-white max-w-4xl w-full h-[calc(100vh-75px)] mx-auto">
        <div className="flex mt-1 flex-col">
          <h1 className="mx-auto text-2xl">Tarefas</h1>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {listaDeTarefas.map((tarefa) => (
              <Tarefa tarefa={tarefa} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
