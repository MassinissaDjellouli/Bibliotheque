import React from 'react'
import { UserHeader } from '../../Headers/usersHeader'
import { useParams } from 'react-router-dom';
export const UserCreationForm = () => {
    return (
           <div>
            <div>
                <label for="name">Nom et prénom</label>
                <input type="text" placeholder="2-45 characters" name="name" id="name" />
            </div>
            <div class="formbuilder-text form-group field-phone">
                <label for="phone">Numéro de téléphone</label>
                <input type="text" name="phone" />
            </div>
            <div class="formbuilder-text form-group field-adresse">
                <label for="adresse" >Adresse</label>
                <input type="text" name="adresse" />
            </div>
        </div>
    )
}