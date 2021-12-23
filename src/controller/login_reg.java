package controller;

import java.sql.SQLIntegrityConstraintViolationException;

public class login_reg
{
    /**
     * @param regReq The JSON request that is sent to be accepted.
     * @return The response JSON that holds the message of the response and the errorcode in the form of a RegisterRetMessage.
     */
    //wont work for now, not sure if we will use JSON files or not.
    public RegisterRetMessage createUserReqHandler(RegReq regReq) {

        /**
         * Instance variable for the RegisterRetMessage to be returned as a JSON
         */
        // create return message (JSON)
        //RegisterRetMessage retval = new RegisterRetMessage();

        //obviously code here won't run
        //Later will add repository to look for usernames already created
        UserMemberModel userMember = new UserMemberModel();
        userMember.createUserMember(regReq);
        userRepository.findByUsername(userMember.getUsername());
        userRepository.save(userMember);

        //if no error, return success
        //retval.setRegistrationSuccess(userMember.getUsername());

        return retval;
    }

}
