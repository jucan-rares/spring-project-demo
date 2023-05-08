package autoservice.autoservice.utils;

import autoservice.autoservice.model.User;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CsvReader {

    private String filePath;

    public CsvReader(String filePath) {
        this.filePath = filePath;
    }

    public List<User> readUsers() throws IOException {

        List<User> users = new ArrayList<>();
        BufferedReader csvReader = new BufferedReader(new FileReader(filePath));
        String row;

        while ((row = csvReader.readLine()) != null) {

            String[] data = row.split(",");
            User user = new User(data[0], data[1], data[2], data[3], data[4]);
            users.add(user);
        }

        csvReader.close();

        return users;
    }
}