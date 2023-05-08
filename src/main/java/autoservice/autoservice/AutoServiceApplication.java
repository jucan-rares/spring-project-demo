package autoservice.autoservice;

import autoservice.autoservice.model.User;
import autoservice.autoservice.repository.UserRepository;
import autoservice.autoservice.utils.CsvReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class AutoServiceApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AutoServiceApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;
	@Override
	public void run(String... args) throws Exception{

	}

}
