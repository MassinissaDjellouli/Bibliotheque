package com.controllers;

import com.dto.*;
import com.models.enums.Genres;
import com.service.ClientService;
import com.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class RootController {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    ClientService clientService;
//    @GetMapping("/")
//    public String getIndex(Model model){
//        return "index";
//    }
    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<ClientDTO> getUsers(){
        return employeeService.getClientList();
    }
    @GetMapping("/employees")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<EmployeDTO> getEmployes(){
        return employeeService.getEmployeList();
    }
    @PostMapping("/newUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ClientDTO> createUser(@RequestBody @Valid ClientDTO clientDTO){
        int clientId = clientService.saveClient(clientDTO.getClientName(),clientDTO.getClientAdress(),clientDTO.getClientPhone());
        clientDTO.setClientNumber(Integer.toString(clientId));
        return clientId != 0 ?
                ResponseEntity.status(HttpStatus.CREATED).body(clientDTO)
                : ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
    }
    @GetMapping("/rechercheTitre/{recherche}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DocumentDTO> getRechercheTitre(@PathVariable String recherche){
        System.out.println(recherche);
        return clientService.rechercheParTitre(recherche);
    }
    @GetMapping("/rechercheAuteur/{recherche}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DocumentDTO> getRechercheAuteur(@PathVariable String recherche){
        System.out.println(recherche);
        return clientService.rechercheParAuteur(recherche);
    }
    @GetMapping("/rechercheAnne/{recherche}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DocumentDTO> getRechercheAnne(@PathVariable String recherche){
        System.out.println(recherche);
        return clientService.rechercheParAnne(Integer.parseInt(recherche));
    }
    @GetMapping("/rechercheGenre/{recherche}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DocumentDTO> getRechercheGenre(@PathVariable String recherche){
        System.out.println(recherche);
        return clientService.rechercheParGenre(Genres.valueOf(recherche));
    }
    @PostMapping("/user/{clientNumber}/emprunter/{documentId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<EmpruntDTO>> emprunter(@PathVariable String clientNumber,
                                                @PathVariable String documentId){
        int empruntId = clientService.emprunter(Integer.parseInt(clientNumber),Integer.parseInt(documentId));
        System.out.println(clientNumber + " " + documentId);
        return empruntId != 0?
                ResponseEntity.status(HttpStatus.CREATED).body(
                        clientService.getEmprunts(Integer.parseInt(clientNumber))
                ):
                ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
    }
    @GetMapping("/users/{clientNumber}/emprunts")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<EmpruntDTO> getEmprunts(@PathVariable String clientNumber){
        return clientService.getEmprunts(Integer.parseInt(clientNumber));
    }
}
