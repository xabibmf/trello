require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Trello
  class Application < Rails::Application
    config.i18n.default_locale = :ja

    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
  end

end
