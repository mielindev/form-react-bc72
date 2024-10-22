import React from "react";
import CreateForm from "./CreateForm";
import RenderForm from "./RenderForm";
import SearchForm from "./SearchForm";

export default function ExerciseForm() {
  return (
    <div className="w-75 mx-auto">
      <CreateForm />
      <SearchForm />
      <RenderForm />
    </div>
  );
}
