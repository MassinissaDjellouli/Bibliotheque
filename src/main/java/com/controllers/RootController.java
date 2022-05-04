package com.controllers;

import com.dto.ClientDTO;
import com.dto.EmployeDTO;
import com.dto.LivreDTO;
import com.dto.MediaDTO;
import com.form.ClientForm;
import com.form.EmpruntForm;
import com.form.RetourForm;
import com.models.documents.Documents;
import com.models.enums.Genres;
import com.models.enums.MediaType;
import com.models.users.Client;
import com.models.users.Employe;
import com.service.ClientService;
import com.service.EmployeeService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
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
//    @GetMapping("/newLivre")
//    public String getNewLivre(Model model){
//        LivreDTO livreDTO = new LivreDTO();
//        model.addAttribute("LivreDTO",livreDTO);
//        return "newLivre";
//    }
//    @GetMapping("/newMedia")
//    public String getNewMedia(Model model){
//        MediaDTO mediaDTO = new MediaDTO();
//        model.addAttribute("MediaDTO",mediaDTO);
//        return "newMedia";
//    }
//    @GetMapping("/createClient")
//    public String getCreateClient(Model model){
//        ClientForm clientForm = new ClientForm();
//        model.addAttribute("ClientForm",clientForm);
//        return "createClient";
//    }
//    @GetMapping("/emprunter")
//    public String getEmprunter(Model model){
//        EmpruntForm empruntForm = new EmpruntForm();
//        model.addAttribute("EmpruntRetourForm", empruntForm);
//        List<Documents> documentsList = clientService.rechercheGlobale();
//        model.addAttribute("docList", documentsList);
//        return "emprunter";
//    }
//    @GetMapping("/retourner")
//    public String getRetourner(Model model){
//        RetourForm retourForm = new RetourForm();
//        model.addAttribute("RetourForm",retourForm);
//        return "retourner";
//    }
//
//    @PostMapping("/createLivre")
//    public String livrePost(@Valid
//                                @ModelAttribute LivreDTO livreDto,
//                            BindingResult errors){
//        if (errors.hasErrors()) {
//            return "redirect:/formError/newLivre";
//        }
//        employeeService.saveLivre(
//                livreDto.getTitre(),
//                livreDto.getAuteur(),
//                livreDto.getEditeur(),
//                Integer.parseInt(livreDto.getAnneeDePublication()),
//                Integer.parseInt(livreDto.getNbExemplaires()),
//                Integer.parseInt(livreDto.getTempsEmprunt()),
//                Integer.parseInt(livreDto.getNbPages()),
//                Genres.valueOf(livreDto.getGenre()));
//        return "employees";
//    }
//    @PostMapping("/createMedia")
//    public String mediaPost(@Valid
//                            @ModelAttribute MediaDTO mediaDTO,
//                            BindingResult errors) {
//        if (errors.hasErrors()) {
//            return "redirect:/formError/newMedia";
//        }
//        employeeService.saveMedia(
//                mediaDTO.getTitre(),
//                mediaDTO.getAuteur(),
//                mediaDTO.getEditeur(),
//                Integer.parseInt(mediaDTO.getAnneeDePublication()),
//                Integer.parseInt(mediaDTO.getNbExemplaires()),
//                Integer.parseInt(mediaDTO.getTempsEmprunt()),
//                mediaDTO.getDuree(),
//                MediaType.valueOf(mediaDTO.getType()));
//        return "employees";
//    }
//    @PostMapping("/createClient")
//    public String clientPost(@Valid
//                            @ModelAttribute ClientForm clientForm,
//                             BindingResult errors) {
//        if (errors.hasErrors()) {
//            return "redirect:/formError/createClient";
//        }
//        clientService.saveClient(
//                clientForm.name,
//                clientForm.adress,
//                clientForm.phone
//        );
//        return "users";
//    }
//    @PostMapping("/emprunter")
//    public String empruntPost(@Valid
//                            @ModelAttribute EmpruntForm empruntForm,
//                             BindingResult errors) {
//        if (errors.hasErrors()) {
//            return "redirect:/formError/emprunter";
//        }
//        try {
//        clientService.emprunter(
//                empruntForm.getClientId(),
//                empruntForm.getBookId());
//        }catch (Exception e){
//            return "redirect:/formError/emprunter";
//        }
//
//        return "users";
//    }
//    @PostMapping("/retourner")
//    public String retourPost(@Valid
//                            @ModelAttribute RetourForm retourForm,
//                             BindingResult errors) {
//        if (errors.hasErrors()) {
//            return "redirect:/formError/retourner";
//        }
//        try {
//        clientService.retourner(
//                retourForm.getClientId(),
//                retourForm.getEmpId());
//        }catch (Exception e){
//            return "redirect:/formError/retourner";
//        }
//
//        return "users";
//    }
//    @GetMapping("/formError/{form}")
//    public String getFormError(Model model, @PathVariable String form){
//        model.addAttribute("form",form);
//        return "formError";
//    }
}
