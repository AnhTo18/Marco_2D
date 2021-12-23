package Models;

import java.util.Date;
import java.util.List;
import hash.HashPassword;
//import com.cs_2.jsons.JSONEntities.JSONItem;
//import com.cs_2.jsons.JSONEntities.UserMemberJSON;
import controller.RegReq;
//import org.hibernate.annotations.LazyCollection;
//import org.hibernate.annotations.LazyCollectionOption;
//import javax.persistence.*;

    public class UserMemberModel
    {
        //TODO: Ensure that non-nullable items are marked as non-nullable

        /**
         * Private Instance variable for index of user/member
         */
//        @Id
//        @Column(nullable = false)
        private Long usermemberindex;
        /**
         * Private Instance variable for username of a user
         */
//        @Column(unique = true, nullable = false)
        private String username;

        /**
         * Private Instance variable for password of a user
         */
//        @Column(nullable = false)
        private String password;

        /**
         * Private Instance variable for salt of a user's password
         */
//        @Column(nullable = false)
        private String salt;

        /**
         * Creates a UserMember with the specified parameters
         * @param username The username
         */
        public UserMemberModel(String username, String firstName, String lastName, String password)
        {
            this.username = username;
            hashAndSetPassword(password);
        }

        /**
         * Constructor that creates a default user that calls a method to autofill
         * details of the user
         */
        public UserMemberModel()
        {
            this.username = null;
            this.password = null;
        }

        /**
         * Note: This method create a default password of "password"
         * @param json
         */
        public UserMemberModel(UserMemberModel json)
        {
            this.username = json.getUsername();
            hashAndSetPassword("password");
        }

        public void createUserMember(RegReq regReq)
        {
            this.username = regReq.getUsername();
        }

        /**
         * Gets the username of the user
         * @return
         * Returns the username
         */
        public String getUsername()
        {
            return username;
        }


        /**
         * Makes a call and sets the hash and salt from given password
         * @param password
         */
        private void hashAndSetPassword(String password) {
            HashPassword hp = new HashPassword();

            this.salt = hp.getSalt();
            this.password = hp.setHashedPassword(password, this.salt);
        }

        /**
         * Checks if password matches password given
         * @param password
         * @return
         * Returns true if passwords match, else return false
         */
        public boolean checkPassword(String password) {

            HashPassword hp = new HashPassword();

            String givenPassword = hp.setHashedPassword(password, this.salt);

            if(givenPassword.equals(this.password)) {
                return true;
            } else {
                return false;
            }

        }

        /**
         * Changes the password of a user
         * Updates lastEdit and lastLogin
         * @param newpassword
         */
        public void changePassword(String newpassword) {
            this.password = newpassword;
            Date currDateTime = new Date();
        }

        /**
         * Updates lastLogin and creates a new DateTime
         */
        public void setSuccessfulLogin() {
            Date currDateTime = new Date();
        }


//        @Override
//        public JSONItem toJSON()
//        {
//            UserMemberJSON json = new UserMemberJSON(this);
//            return json;
    }

