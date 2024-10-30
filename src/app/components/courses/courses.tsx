import { categories} from "@/app/data/cursos"

export const CoursesComponent = () => {


  return (
    <div>
      <article className="bg-white rounded-lg">
        
        {
          JSON.stringify(categories)        
        }
      </article>
    </div>
  )
}
