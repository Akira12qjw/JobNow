//package com.example.movieba.vnpay;
//
//import com.example.movieba.entities.Company;
//import com.example.movieba.repository.CompanyRepository;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.repository.query.Param;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.io.IOException;
//import java.util.Map;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//public class VNPayResource {
//    @Autowired
//    private CompanyRepository companyRepository;
//    @Autowired
//    private RegisterServicesRepository registerServicesRepository;
//    @GetMapping("payment-callback")
////    public void paymentCallback(@RequestParam Map<String, String> queryParams, HttpServletResponse response) throws IOException {
//        String vnp_ResponseCode = queryParams.get(key:"vnp_ResponseCode");
//        String companyId = queryParams.get(key:"id_company");
//        String registerServiceld = queryParams.get(key:"registerServiceld");
//        if(contractId!= null && !id_company.equals(anobject:"")) {
//            if ("00".equals(vnp_ResponseCode)) {
//// Giao dịch thành công
//// Thực hiện các xử lý cần thiết, vì dụ: cập nhật CSDL
//                Company company = companyRepository.findById(Integer.parseInt(queryParams.get(key:"id_company")))
//.orElseThrow(()-> new Not FoundException(message: "Không tồn tại hợp đồng này của sinh viên"));
//                contract.setStatus(status:1);
//                contractRepository.save(contract);
//                response.sendRedirect(location: "http://localhost:4200/info-student");
//            } else {
//// Giao dịch thất bại
//// Thực hiện các xử lý cần thiết, ví dụ: không cập nhật CSDL\
//                response.sendRedirect(location: "http://localhost:4200/payment-failed");
//            }
//        }
//        if (registerserviceId!= null && !registerServiceId.equals(anobject:"")) {
//            if ("00".equals(vnp_ResponseCode)) {
//                // Giao dịch thành công
//              // Thực hiện các xử lý cần thiết, ví dụ cập nhật CSDL
//                RegisterSer
//            }
//}
