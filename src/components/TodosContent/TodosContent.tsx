import classes from "./TodosContent.module.scss";
import { Filters } from "../Filters/Filters.tsx";
import { TodosInfo } from "../TodosInfo/TodosInfo.tsx";
import { TodosContainer } from "./components/TodoContainer/TodosContainer.tsx";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";
import { todosActions } from "../../redux/slices/todosSlice.ts";

export const TodosContent = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const { todos } = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();
  const getTaskPos = (id: string) => todos.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;
    const activeId = String(active.id);
    const overId = String(over?.id);
    const originalPos = getTaskPos(activeId);
    const newPos = getTaskPos(overId);
    dispatch(todosActions.onDragTodo({ newPos, originalPos }));
  };
  return (
    <div className={classes.todosContentWrapper}>
      <Filters />
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <TodosContainer />
      </DndContext>
      <TodosInfo />
    </div>
  );
};
