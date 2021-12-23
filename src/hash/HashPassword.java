package hash;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Random;

    //password hash stored as a string, salt as an int(currently a string, may be easier)
    public class HashPassword
    {
        private static final Random RANDOM = new SecureRandom();

        /**
         * Randomly returns a salt to be added to the hashed password
         */
        public String getSalt()
        {
            byte[] saltArray = new byte[16];
            RANDOM.nextBytes(saltArray);
            return Base64.getEncoder().encodeToString(saltArray);
        }

        /**
         * Generates a password hash using SHA-256
         * @param password
         * Password from database to be passed in
         * @param salt
         * Salt to be passed in
         * @return
         * Returns the password hash if successful
         */
        public String setHashedPassword(String password, String salt)
        {
            char[] passwordArray = password.toCharArray(); //converts string to array of char
            PBEKeySpec spec = new PBEKeySpec(passwordArray, Base64.getDecoder().decode(salt), 10000, 256);
            Arrays.fill(passwordArray, Character.MIN_VALUE);
            try
            {
                SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
                return Base64.getEncoder().encodeToString(skf.generateSecret(spec).getEncoded());
            }
            catch (NoSuchAlgorithmException | InvalidKeySpecException e)
            {
                throw new AssertionError("Error trying to hash, not complete: " + e.getMessage(), e);
            }
            finally
            {
                spec.clearPassword();
            }
        }
}
