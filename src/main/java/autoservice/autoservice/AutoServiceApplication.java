package autoservice.autoservice;

import autoservice.autoservice.model.User;
import autoservice.autoservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
