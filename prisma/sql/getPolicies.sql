    select ip.policy_id, ip.policy_name, ip.base_price, string_agg(policy_types.policy_type, ' , ') as type_of_policy
    from insurance_policies ip 
    inner join policy_to_types on policy_to_types.policy_id = ip.policy_id
    inner join policy_types on policy_to_types.type_id = policy_types.id 
    group by ip.policy_id, ip.policy_name, ip.base_price
    ORDER BY ip.policy_id asc;