package repository;

public class userRepository
{
    public interface UserMemberRepository extends JpaRepository<UserMemberModel, Long>
    {
        UserMemberModel findByUsername(String username);
        UserMemberModel findByUserMemberID(String userMemberID);
    }
}
