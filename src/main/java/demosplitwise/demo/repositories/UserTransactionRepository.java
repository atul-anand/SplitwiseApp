package demosplitwise.demo.repositories;

import demosplitwise.demo.domain.UserTransaction;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserTransactionRepository extends CrudRepository<UserTransaction,Long> {

    List<UserTransaction> findByUserId(long id);
    List<UserTransaction> findByGroupIdAndUserId(long groupId,long transId);
    List<UserTransaction> findByTransID(long id);
    UserTransaction findByUserIdAndTransID(long userId,long transid);
}
