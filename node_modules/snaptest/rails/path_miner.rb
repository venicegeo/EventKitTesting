host = '$host$'

Rails.application.routes.named_routes.helpers.map { |route|
  if route.to_s.include? 'url'
    begin
      { route.to_s.sub('_url', '') => Rails.application.routes.url_helpers.send(route, host: host) }
    rescue ActionController::UrlGenerationError => e
      missing_params_string = e.message.split('missing required keys:')[1].gsub(/[ \:\[\]]/, '')
      missing_params = missing_params_string.split(',').map { |param| param.strip }
      params_hash = {}

      missing_params.each { |param| params_hash.merge!({ param.to_sym => "$#{ param }$" }) }

      begin
        { route.to_s.sub('_url', '') => Rails.application.routes.url_helpers.send(route, { host: host }.merge(params_hash)) }
      rescue
      end
    rescue Exception => e
    end
  else
    next
  end
}.delete_if { |url| url.nil? }.to_json
