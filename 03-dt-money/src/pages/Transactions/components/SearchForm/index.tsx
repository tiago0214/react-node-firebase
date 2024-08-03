import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>; 

export function SearchForm(){
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearch(data: SearchFormInputs){
    await new Promise(resolve => setTimeout(resolve,2000));

    console.log(data);
  }

  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input 
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      ></input>

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}