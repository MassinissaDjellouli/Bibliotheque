package com.utilities;

import com.dto.LivreDTO;
import com.dto.MediaDTO;
import com.models.documents.Livre;
import com.models.documents.Media;
import com.models.enums.Genres;
import com.models.enums.MediaType;

public class DTOToModelConverter {
    public static Livre DtoToLivre(LivreDTO livreDTO){
        return Livre.builder()
                .titre(livreDTO.getTitre())
                .auteur(livreDTO.getAuteur())
                .editeur(livreDTO.getEditeur())
                .anneeDePublication(Integer.parseInt(livreDTO.getAnneeDePublication()))
                .nbExemplaires(Integer.parseInt(livreDTO.getNbExemplaires()))
                .tempsEmprunt(3)
                .nbPages(Integer.parseInt(livreDTO.getNbPages()))
                .genre(Genres.valueOf(livreDTO.getGenre()))
                .build();
    }
    public static Media DtoToMedia(MediaDTO mediaDTO){
        return Media.builder()
                .titre(mediaDTO.getTitre())
                .auteur(mediaDTO.getAuteur())
                .editeur(mediaDTO.getEditeur())
                .anneeDePublication(Integer.parseInt(mediaDTO.getAnneeDePublication()))
                .nbExemplaires(Integer.parseInt(mediaDTO.getNbExemplaires()))
                .tempsEmprunt(Integer.parseInt(mediaDTO.getTempsEmprunt()))
                .duree(mediaDTO.getDuree())
                .type(MediaType.valueOf(mediaDTO.getType()))
                .build();
    }
}
