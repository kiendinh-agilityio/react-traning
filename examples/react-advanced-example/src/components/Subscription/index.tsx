import { useSubscriptionStore } from '@/stores';

const Subscription = () => {
  const { isSubscribed, toggleSubscription } = useSubscriptionStore();

  return (
    <div>
      <p>{isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
      <button onClick={toggleSubscription}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};

export default Subscription;
