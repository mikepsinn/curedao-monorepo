<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Console;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;
use App\Console\Concerns\AcceptsNameAndVendor;
use Symfony\Component\Process\Process;

class ResourceToolCommand extends Command
{
    use AcceptsNameAndVendor, RenamesStubs;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'astral:resource-tool {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new resource tool';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (! $this->hasValidNameArgument()) {
            return;
        }

        (new Filesystem)->copyDirectory(
            __DIR__.'/resource-tool-stubs',
            $this->toolPath()
        );

        // Tool.js replacements...
        $this->replace('{{ component }}', $this->toolName(), $this->toolPath().'/resources/js/tool.js');

        // Tool.vue replacements...
        $this->replace('{{ title }}', $this->toolTitle(), $this->toolPath().'/resources/js/components/Tool.vue');

        // Tool.php replacements...
        $this->replace('{{ namespace }}', $this->toolNamespace(), $this->toolPath().'/src/Tool.stub');
        $this->replace('{{ class }}', $this->toolClass(), $this->toolPath().'/src/Tool.stub');
        $this->replace('{{ component }}', $this->toolName(), $this->toolPath().'/src/Tool.stub');
        $this->replace('{{ title }}', $this->toolTitle(), $this->toolPath().'/src/Tool.stub');

        (new Filesystem)->move(
            $this->toolPath().'/src/Tool.stub',
            $this->toolPath().'/src/'.$this->toolClass().'.php'
        );

        // ToolServiceProvider.php replacements...
        $this->replace('{{ namespace }}', $this->toolNamespace(), $this->toolPath().'/src/ToolServiceProvider.stub');
        $this->replace('{{ component }}', $this->toolName(), $this->toolPath().'/src/ToolServiceProvider.stub');
        $this->replace('{{ name }}', $this->toolName(), $this->toolPath().'/src/ToolServiceProvider.stub');

        // Tool composer.json replacements...
        $this->replace('{{ name }}', $this->argument('name'), $this->toolPath().'/composer.json');
        $this->replace('{{ escapedNamespace }}', $this->escapedToolNamespace(), $this->toolPath().'/composer.json');

        // Rename the stubs with the proper file extensions...
        $this->renameStubs();

        // Register the tool...
        $this->addToolRepositoryToRootComposer();
        $this->addToolPackageToRootComposer();

        if ($this->hasPackageFile()) {
            $this->addScriptsToNpmPackage();
        } else {
            $this->warn('Please create a package.json to the root of your project.');
        }

        if ($this->confirm("Would you like to install the tool's NPM dependencies?", true)) {
            $this->installNpmDependencies();

            $this->output->newLine();
        }

        if ($this->confirm("Would you like to compile the tool's assets?", true)) {
            $this->compile();

            $this->output->newLine();
        }

        if ($this->confirm('Would you like to update your Composer packages?', true)) {
            $this->composerUpdate();
        }
    }

    /**
     * Get the array of stubs that need PHP file extensions.
     *
     * @return array
     */
    protected function stubsToRename()
    {
        return [
            $this->toolPath().'/src/ToolServiceProvider.stub',
            $this->toolPath().'/routes/api.stub',
        ];
    }

    /**
     * Add a path repository for the tool to the application's composer.json file.
     *
     * @return void
     */
    protected function addToolRepositoryToRootComposer()
    {
        $composer = json_decode(file_get_contents(base_path('composer.json')), true);

        $composer['repositories'][] = [
            'type' => 'path',
            'url' => './'.$this->relativeToolPath(),
        ];

        file_put_contents(
            base_path('composer.json'),
            json_encode($composer, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
        );
    }

    /**
     * Add a package entry for the tool to the application's composer.json file.
     *
     * @return void
     */
    protected function addToolPackageToRootComposer()
    {
        $composer = json_decode(file_get_contents(base_path('composer.json')), true);

        $composer['require'][$this->argument('name')] = '*';

        file_put_contents(
            base_path('composer.json'),
            json_encode($composer, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
        );
    }

    /**
     * Add a path repository for the tool to the application's composer.json file.
     *
     * @return void
     */
    protected function addScriptsToNpmPackage()
    {
        $package = json_decode(file_get_contents(base_path('package.json')), true);

        $package['scripts']['build-'.$this->toolName()] = 'cd '.$this->relativeToolPath().' && npm run dev';
        $package['scripts']['build-'.$this->toolName().'-prod'] = 'cd '.$this->relativeToolPath().' && npm run prod';

        file_put_contents(
            base_path('package.json'),
            json_encode($package, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
        );
    }

    /**
     * Install the tool's NPM dependencies.
     *
     * @return void
     */
    protected function installNpmDependencies()
    {
        $this->executeCommand('npm set progress=false && npm install', $this->toolPath());
    }

    /**
     * Compile the tool's assets.
     *
     * @return void
     */
    protected function compile()
    {
        $this->executeCommand('npm run dev', $this->toolPath());
    }

    /**
     * Update the project's composer dependencies.
     *
     * @return void
     */
    protected function composerUpdate()
    {
        $this->executeCommand('composer update', getcwd());
    }

    /**
     * Run the given command as a process.
     *
     * @param  string  $command
     * @param  string  $path
     * @return void
     */
    protected function executeCommand($command, $path)
    {
        $process = (new Process($command, $path))->setTimeout(null);

        if ('\\' !== DIRECTORY_SEPARATOR && file_exists('/dev/tty') && is_readable('/dev/tty')) {
            $process->setTty(true);
        }

        $process->run(function ($type, $line) {
            $this->output->write($line);
        });
    }

    /**
     * Replace the given string in the given file.
     *
     * @param  string  $search
     * @param  string  $replace
     * @param  string  $path
     * @return void
     */
    protected function replace($search, $replace, $path)
    {
        file_put_contents($path, str_replace($search, $replace, file_get_contents($path)));
    }

    /**
     * Get the path to the tool.
     *
     * @return string
     */
    protected function toolPath()
    {
        return base_path('astral-components/'.$this->toolClass());
    }

    /**
     * Get the relative path to the tool.
     *
     * @return string
     */
    protected function relativeToolPath()
    {
        return 'astral-components/'.$this->toolClass();
    }

    /**
     * Get the tool's namespace.
     *
     * @return string
     */
    protected function toolNamespace()
    {
        return Str::studly($this->toolVendor()).'\\'.$this->toolClass();
    }

    /**
     * Get the tool's escaped namespace.
     *
     * @return string
     */
    protected function escapedToolNamespace()
    {
        return str_replace('\\', '\\\\', $this->toolNamespace());
    }

    /**
     * Get the tool's class name.
     *
     * @return string
     */
    protected function toolClass()
    {
        return Str::studly($this->toolName());
    }

    /**
     * Get the tool's vendor.
     *
     * @return string
     */
    protected function toolVendor()
    {
        return explode('/', $this->argument('name'))[0];
    }

    /**
     * Get the "title" name of the tool.
     *
     * @return string
     */
    protected function toolTitle()
    {
        return Str::title(str_replace('-', ' ', $this->toolName()));
    }

    /**
     * Get the tool's base name.
     *
     * @return string
     */
    protected function toolName()
    {
        return explode('/', $this->argument('name'))[1];
    }

    /**
     * Determine whether we have a package file.
     *
     * @return bool
     */
    protected function hasPackageFile()
    {
        return file_exists(base_path('package.json'));
    }
}
