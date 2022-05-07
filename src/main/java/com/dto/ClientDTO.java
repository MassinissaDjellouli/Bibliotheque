package com.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientDTO {
    private String clientNumber;
    @NotBlank
    @NotNull
    @Size(min = 2, max = 45)
    private String clientName;
    @NotNull
    @NotBlank
    @Size(min = 5 ,max = 200)
    private String clientAdress;
    @NotNull
    @NotBlank
    @Size(min = 10, max = 10)
    @Pattern(regexp = "[0-9]{10}")
    private String clientPhone;
}
