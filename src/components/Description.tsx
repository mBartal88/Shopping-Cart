type PropsType = {
    descriptionList: string[]
}

const Description = ({descriptionList}: PropsType) => {
    const content = 
    <div className="container">     
        {descriptionList.map(details => (  
            <li key={details}>  
                {details}  
            </li>  
        ))}  
    </div>  

  return content
}

export default Description