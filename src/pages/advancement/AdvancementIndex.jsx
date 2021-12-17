import { useQuery } from "@apollo/client";
import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/Header";
import Line from "../../components/Line";
import { GET_ADVANCEMENTS} from '../../graphql/advancement/query'

const AdvancementIndex = () => {
  const { data, error, loading } = useQuery(GET_ADVANCEMENTS);
  console.log("data", data)
  return (
    <Card>
     {data && data.Advancements.map((u)=>{
       return(
<>
         <li>{u.date}</li>
         <li>{u.description}</li>
         <li>{u.observations}</li>
         <li>{u.project.nameProject}</li>
         <li>{u.createdBy.name}</li>
         </>
       )
     })}
    </Card>
  )
}

export default AdvancementIndex
