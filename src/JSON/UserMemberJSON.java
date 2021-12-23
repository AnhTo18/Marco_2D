package JSON;

import Models.UserMemberModel;

    public class UserMemberJSON
    {
        private String username;
        public String getUsername() {
            return username;
        }
        public UserMemberJSON(UserMemberModel model)
        {
            this.username = model.getUsername();
        }
        public UserMemberJSON()
        {
            this.username = null;
        }
    }
