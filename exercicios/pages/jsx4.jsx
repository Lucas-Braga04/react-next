import React, {useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        name: "",
        descricao: "",
        preco: "",
        categoria: "",
    });
    
    const handlerChange = (e) => {
        const {name, value} = e.target;
        setFormData ({ ...formData, [name]: value});
    };
    
    const handlerSubmit = (e) => {
        e.prevenDefault();
    
        console.log(formData)
    }

    return(
        <form onSubmit={handlerSubmit}>
            <label>
                Nome: 
                <input type="text" name="name" value={formData.name} onChange={handlerChange}/>
            </label>
            <label>
                Descrição:
                <textarea name="description" value={formData.descricao} onChange={handlerChange}/>
            </label>
            <label>
                Preço: 
                <input type="number" name="price" value={formData.preco} onChange={handlerChange}/>
            </label>
            <label>
                Categoria:
                <select name="category" value={formData.categoria} onChange={handlerChange}>
                    <option value="">Selecione uma categoria</option>
                    <option value="eletrônicos">Eletrônicos</option>
                    <option value="roupas">Roupas</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="outros">Outros</option>
                </select>
            </label>

            <button type="submit">Enviar</button>
        </form>
    )
    

}