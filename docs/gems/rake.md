---
title: Rake
---

- make-life program.
- File extension `.rake`
- Location on Rails: `lib/tasks/<NAME>.rake`

### Example of Rake file
```rb
namespace :import do
  # csv_data     => name of the task
  # :environment => Before we run the import_data task we need to run environment task
  #                 :environment is a Rails rake task that loads models &
  #                  everything we would normally get on Rails console.
  desc "Imports data from a csv file"
  task csv_data: [:environment] do
    require 'csv'
    # do the work here....
  end
end
```

### Running rake task:
```rb
rake import:csv_data
```

### Get list of all rake tasks:

```rb
rake -T

# Ouput:
rake about                              # List versions of all Rails frameworks and the environment
rake action_mailbox:ingress:exim        # Relay an inbound email from Exim to Action Mailbox (URL and INGRESS_PASSWORD required)
rake action_mailbox:ingress:postfix     # Relay an inbound email from Postfix to Action Mailbox (URL and INGRESS_PASSWORD required)
rake action_mailbox:ingress:qmail       # Relay an inbound email from Qmail to Action Mailbox (URL and INGRESS_PASSWORD required)
rake action_mailbox:install             # Installs Action Mailbox and its dependencies
rake action_mailbox:install:migrations  # Copy migrations from action_mailbox to application
rake action_text:install                # Copy over the migration, stylesheet, and JavaScript files
rake action_text:install:migrations     # Copy migrations from action_text to application
rake active_storage:install             # Copy over the migration needed to the application
rake app:template                       # Applies the template supplied by LOCATION=(/path/to/template) or URL
rake app:update                         # Update configs and some other initially generated files (or use just update:configs or update:bin)
rake assets:clean[keep]                 # Remove old compiled assets
rake assets:clobber                     # Remove compiled assets
rake assets:environment                 # Load asset compile environment
rake assets:precompile                  # Compile all the assets named in config.assets.precompile
rake cache_digests:dependencies         # Lookup first-level dependencies for TEMPLATE (like messages/show or comments/_comment.html)
rake cache_digests:nested_dependencies  # Lookup nested dependencies for TEMPLATE (like messages/show or comments/_comment.html)
rake db:create                          # Creates the database from DATABASE_URL or config/database.yml for the current RAILS_ENV (use db:create:all to create all...
rake db:drop                            # Drops the database from DATABASE_URL or config/database.yml for the current RAILS_ENV (use db:drop:all to drop all datab...
rake db:environment:set                 # Set the environment value for the database
rake db:fixtures:load                   # Loads fixtures into the current environment's database
rake db:migrate                         # Migrate the database (options: VERSION=x, VERBOSE=false, SCOPE=blog)
rake db:migrate:down                    # Runs the "down" for a given migration VERSION
rake db:migrate:redo                    # Rolls back the database one migration and re-migrates up (options: STEP=x, VERSION=x)
rake db:migrate:status                  # Display status of migrations
rake db:migrate:up                      # Runs the "up" for a given migration VERSION
rake db:prepare                         # Runs setup if database does not exist, or runs migrations if it does
rake db:reset                           # Drops and recreates the database from db/schema.rb for the current environment and loads the seeds
rake db:rollback                        # Rolls the schema back to the previous version (specify steps w/ STEP=n)
rake db:schema:cache:clear              # Clears a db/schema_cache.yml file
rake db:schema:cache:dump               # Creates a db/schema_cache.yml file
rake db:schema:dump                     # Creates a database schema file (either db/schema.rb or db/structure.sql, depending on `config.active_record.schema_format`)
rake db:schema:load                     # Loads a database schema file (either db/schema.rb or db/structure.sql, depending on `config.active_record.schema_format`...
rake db:seed                            # Loads the seed data from db/seeds.rb
rake db:seed:replant                    # Truncates tables of each database for current environment and loads the seeds
rake db:setup                           # Creates the database, loads the schema, and initializes with the seed data (use db:reset to also drop the database first)
rake db:structure:dump                  # Dumps the database structure to db/structure.sql
rake db:structure:load                  # Recreates the databases from the structure.sql file
rake db:version                         # Retrieves the current schema version number
rake log:clear                          # Truncates all/specified *.log files in log/ to zero bytes (specify which logs with LOGS=test,development)
rake middleware                         # Prints out your Rack middleware stack
rake restart                            # Restart app by touching tmp/restart.txt
rake secret                             # Generate a cryptographically secure secret key (this is typically used to generate a secret for cookie sessions)
rake stats                              # Report code statistics (KLOCs, etc) from the application or engine
rake test                               # Runs all tests in test folder except system ones
rake test:all                           # Runs all tests, including system tests
rake test:db                            # Run tests quickly, but also reset db
rake test:system                        # Run system tests only
rake time:zones[country_or_offset]      # List all time zones, list by two-letter country code (`bin/rails time:zones[US]`), or list by UTC offset (`bin/rails tim...
rake tmp:clear                          # Clear cache, socket and screenshot files from tmp/ (narrow w/ tmp:cache:clear, tmp:sockets:clear, tmp:screenshots:clear)
rake tmp:create                         # Creates tmp directories for cache, sockets, and pids
rake webpacker                          # Lists all available tasks in Webpacker
rake webpacker:binstubs                 # Installs Webpacker binstubs in this application
rake webpacker:check_binstubs           # Verifies that webpack & webpack-dev-server are present
rake webpacker:check_node               # Verifies if Node.js is installed
rake webpacker:check_yarn               # Verifies if Yarn is installed
rake webpacker:clean[keep,age]          # Remove old compiled webpacks
rake webpacker:clobber                  # Remove the webpack compiled output directory
rake webpacker:compile                  # Compile JavaScript packs using webpack for production with digests
rake webpacker:info                     # Provide information on Webpacker's environment
rake webpacker:install                  # Install Webpacker in this application
rake webpacker:install:angular          # Install everything needed for Angular
rake webpacker:install:coffee           # Install everything needed for Coffee
rake webpacker:install:elm              # Install everything needed for Elm
rake webpacker:install:erb              # Install everything needed for Erb
rake webpacker:install:react            # Install everything needed for React
rake webpacker:install:stimulus         # Install everything needed for Stimulus
rake webpacker:install:svelte           # Install everything needed for Svelte
rake webpacker:install:typescript       # Install everything needed for Typescript
rake webpacker:install:vue              # Install everything needed for Vue
rake webpacker:verify_install           # Verifies if Webpacker is installed
rake webpacker:yarn_install             # Support for older Rails versions
rake yarn:install                       # Install all JavaScript dependencies as specified via Yarn
rake zeitwerk:check                     # Checks project structure for Zeitwerk compatibility
```