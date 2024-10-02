select ph.holder_id, ph.holder_email, ph.holder_first_name, ph.holder_last_name, string_agg(ip.policy_name, ' , ') as policy_names from policy_holders ph 
inner join holder_to_policies hp on ph.holder_id = hp.holder_id 
inner join insurance_policies ip on hp.policy_id = ip.policy_id 
group by ph.holder_id, ph.holder_email, ph.holder_first_name, ph.holder_last_name
order by ph.holder_id asc;